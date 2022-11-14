import React from "react";
import { t } from "ttag";
import { CardIcon, CardRoot, CardTitle } from "./HomeHelpCard.styled";

const HomeHelpCard = (): JSX.Element => {
  return (
    <CardRoot href="https://www.dataman.com/learn/">
      <CardIcon name="reference" />
      <CardTitle>{t`DataMan tips`}</CardTitle>
    </CardRoot>
  );
};

export default HomeHelpCard;
