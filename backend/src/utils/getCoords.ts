import axios from 'axios';
import { ErrorsDescriptions } from '../enums/errorsDescriptions';
import { AppError } from '../helpers/errorHandler';
import HttpStatusCode from '../enums/httpStatusCodes';
import { cacheManager } from '../helpers/redisCache';

export async function getCoords(address: string) {
  const cacheKey = `coords:${address}`;

  const coords = await cacheManager.cacheRequest(cacheKey, async () => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        throw new Error('Адрес не найден');
      }
    } catch (error) {
      throw new AppError(ErrorsDescriptions.GET_COORDS_ERROR, true, error, HttpStatusCode.BAD_REQUEST);
    }
  });

  return coords;
}
