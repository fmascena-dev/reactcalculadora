import React from 'react';
import { calculateBMI, bmiCategories} from './bmiUtils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: '',
      weight: '',
      bmi: null,
      category: '',
    };
  }
  
  handleInputChange = ({ target: { name, value} }) => {
    this.setState({ [name]: value});
  };

  calculateBMI = () => {
    const { height, weight } = this.state;
    if (height && weight) {
      const bmiValue = calculateBMI(height, weight);
      const category = bmiCategories.find(({ min, max }) => bmiValue >= min && bmiValue <= max);
      this.setState({
        ...this.state,
        bmi: bmiValue.toFixed(2),
        category: category ? category.label : 'Fora da faixa',
      });
    }
  };

  render() {
    const { height, weight, bmi, category } = this.state;

    return (
      <section>
        <div style={{ padding: '20px'}}>
          <h1>Calculadora IMC</h1>
          <input 
            type="number"
            name="height"
            value={height}
            onChange={this.handleInputChange}
            placeholder="Altura (em cm)"
            />
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={this.handleInputChange}
              placeholder="Peso (em kg)"
            />
            <button onClick={this.calculateBMI}>Calcular IMC</button>

            {bmi ? (
              <p>{`Seu IMC é`} <strong>{bmi}</strong> {`e você está na categoria: `} <strong>{category}</strong></p>
            ) : (
              <p>Preencha os campos para calcular o seu IMC</p>
            )}
        </div>
      </section>
    );
  };
}

export default App;