import { Minus, Plus } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import styles from './styles.module.scss';

interface QuantityInputProps {
  value?: number;
  size?: "large" | "small";
  onChangeValue: (newValue: number) => void;
}

export function QuantityInput({
  value = 1,
  onChangeValue,
  size = "large",
}: QuantityInputProps) {
  const [newValue, setNewValue] = useState(1);

  useEffect(() => {
    setNewValue(value);
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(Number(e.target.value));
    onChangeValue(Number(e.target.value));
  };

  const handleIncrementValue = () => {
    setNewValue((prevState) => {
      const tempValue = prevState + 1;

      onChangeValue(tempValue);

      return tempValue;
    });
  };

  const handleDecrementValue = () => {
    setNewValue((prevState) => {
      const tempValue = prevState - 1;

      onChangeValue(tempValue);

      return tempValue;
    });
  };

  const decreaseButtonDisabled = useMemo(() => newValue === 1, [newValue]);

  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <button onClick={handleDecrementValue} disabled={decreaseButtonDisabled}>
        <Minus size={14} weight="fill" />
      </button>
      <input 
        step={1}
        type="number"
        value={newValue}
        onChange={(e) => handleChangeInput(e)} 
      />
      <button onClick={handleIncrementValue}>
        <Plus size={14} weight="fill" />
      </button>
    </div>
  );
}