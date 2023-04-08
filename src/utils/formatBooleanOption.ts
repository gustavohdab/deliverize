function formatBooleanOption(option: string) {
  switch (option) {
    case "Queijo Cheddar":
      return "Sim";
    case "Cebola Crispy":
      return "Não";
    default:
      return option;
  }
}

export default formatBooleanOption;