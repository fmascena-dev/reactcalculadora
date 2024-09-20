export const calculateBMI = (height, weight) => {
    return weight / ((height / 100) ** 2);
};

export const bmiCategories = [
    { label: 'Magreza', min: 0, max: 18.5},
    { label: 'Normal', min: 18.5, max: 24.9},
    { label: 'Sobrepeso', min: 25, max: 29.9},
    { label: 'Obesidade Grau 1', min: 30, max: 34.9},
    { label: 'Obesidade Grau 2', min:35, max: 39.9},
    { label: 'Obesidade Grau 3', min: 40, max: 100},
];