import React from "react";
import { InputText} from "../_library/Inputs";
import { Row } from "../_library/Containers";

export const CarSectionForm = () => {
  return (
    <Row marginBottom={2}>
      <InputText
            id={"car"}
            label={"Car"}
            placeholder={"Model, rental, etc..."}
        />
      <InputText id={"carCosts"} label={"Car Costs"} />
    </Row>
  );
};
