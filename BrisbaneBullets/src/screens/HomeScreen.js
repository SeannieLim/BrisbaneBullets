import React from "react";
import { Box } from "@gluestack-ui/themed";
import CustomButton from "../components/CustomButton";
import NewsCard from "../components/NewsCard";
const HomeScreen = () => {
  return (
    //add to test components
    <><NewsCard /><Box>
      <CustomButton btnText='Ticket' />
      <CustomButton btnText='Shop Now' />
    </Box></>
  );
};
export default HomeScreen;
