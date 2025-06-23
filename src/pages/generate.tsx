import { Rows } from "@canva/app-ui-kit";
import { AppError, DataInfographicPanel } from "src/components";

export const GeneratePage = () => (
  <Rows spacing="1u">
    <AppError />
    <DataInfographicPanel />
  </Rows>
);
