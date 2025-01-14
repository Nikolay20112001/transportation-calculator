import { fillPresets, presetArray, preset } from "./presets";
import { requestModel } from "./requestModel";
import { api } from "./api";
import { fillPoints } from "./points";
const presetListSelector: Element = document.querySelector(".about__preset");
const toPointsSelector: Element = document.querySelector(".to__preset");
const formPointsSelector: Element = document.querySelector(".from__preset");
const calculateButtonSelector: Element =
  document.querySelector(".button-calculate");
const requestForm: HTMLFormElement = document.querySelector("#reqForm");

const fieldNamesRu = new Map<string, string>(
  [
    ["from", "Откуда"],
    ["to", "Куда"],
    ["preset", "Параметры груза"],
    ["len", "Длина"],
    ["width", "Ширина"],
    ["depth", "Глубина"],
    ["weight", "Масса"],
  ]
)
const _api_url = process.env.API_URL
  ? process.env.API_URL
  : "http://127.0.0.1:8010/api/delivery";

console.log(_api_url);
const _api = new api(new URL(`${_api_url}`));

function presetListSelectorHandler(event: Event) {
  const customFieldsetSelector = document.querySelector(".custom__fieldset");
  if (requestForm.preset.value === "custom") {
    customFieldsetSelector.classList.remove("hidden");
  } else {
    customFieldsetSelector.classList.add("hidden");
  }
}

function simpleValidation(): HTMLElement {
  if (requestForm.from.value == "") return requestForm.from;
  if (requestForm.to.value == "") return requestForm.to;
  if (requestForm.preset.value == "") return requestForm.preset;
  if (requestForm.preset.value == "custom") {
    if (requestForm.len.value == "") return requestForm.len;
    if (requestForm.width.value == "") return requestForm.width;
    if (requestForm.depth.value == "") return requestForm.depth;
    if (requestForm.weight.value == "") return requestForm.weight;
  }
}

function showMessage(msg: string) {
  const messageElement = document.querySelector(".result");
  messageElement.classList.remove("hidden");
  messageElement.textContent = msg;
  messageElement.scrollIntoView();
}

function calculateHandler() {
  const errorElement = simpleValidation();

  if (errorElement) {
    showMessage(`Не заполнено поле \"${fieldNamesRu.get(errorElement.id)}\"`);
    return;
  }

  let request = undefined;
  if (requestForm.preset.value == "custom") {
    request = {
      width: requestForm.width.value,
      depth: requestForm.depth.value,
      height: requestForm.len.value,
      weight: requestForm.weight.value,
      from: requestForm.from.value,
      to: requestForm.to.value,
      isStrict: true,
    } as requestModel;
  } else {
    request = new requestModel(
      requestForm.to.value,
      requestForm.from.value,
      presetArray[requestForm.preset.value]
    );
  }

  _api
    .calculatePrice(request)
    .then((res) => {
      showMessage(`Рассчётная стоимость: ${res.cost} р.`);
    })
    .catch(showMessage);
}

fillPoints(toPointsSelector);
fillPoints(formPointsSelector);
fillPresets(presetListSelector);

calculateButtonSelector.addEventListener("click", calculateHandler);
presetListSelector.addEventListener("change", presetListSelectorHandler);
