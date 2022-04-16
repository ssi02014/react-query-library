import React, { useCallback, useState } from "react";
import styled from "styled-components";

const options = ["option1", "option2", "option3", "option4"];

const SelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("모든 타입");

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionItem = useCallback((option) => {
    setValue(option);
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <SelectBoxWrapper>
      <OptionHeader className={isOpen ? "active" : ""} onClick={handleToggle}>
        {value} <p>▼</p>
      </OptionHeader>

      {isOpen && (
        <OptionListContainer>
          {options.map((option) => (
            <OptionItem
              key={option}
              option={option}
              onClick={() => handleOptionItem(option)}
            />
          ))}
        </OptionListContainer>
      )}
    </SelectBoxWrapper>
  );
};

const OptionItem = ({
  option,
  onClick,
}: {
  option: string;
  onClick: () => void;
}) => {
  return <OptionItemContainer onClick={onClick}>{option}</OptionItemContainer>;
};

const SelectBoxWrapper = styled.div`
  width: 180px;
  cursor: pointer;
  color: #616161;
`;

const OptionHeader = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dadada;
  border-radius: 4px;

  p {
    transition: transform 0.25s ease-in-out;
  }

  &.active {
    border-color: #8f16ad;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    p {
      transform: rotate(180deg);
    }
  }
`;

const OptionListContainer = styled.ul`
  border: 1px solid #dadada;
  border-radius: 4px;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const OptionItemContainer = styled.li`
  padding: 10px 15px;

  & + & {
    border-top: 1px solid #dadada;
  }
`;

export default SelectBox;
