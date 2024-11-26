import GetLocationsData from "../utils/GetLocationsData";
import { useSelector } from "react-redux";
import { optionSelector } from "../redux/optionsSlice/selector";
import { useQuery } from "@tanstack/react-query";

export default function UseLocationsData() {
  const { locationQuery } = useSelector(optionSelector);
  return useQuery({
    queryKey: ["locations"],
    queryFn: () => GetLocationsData(locationQuery),
  });
}
