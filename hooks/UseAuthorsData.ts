import GetAuthorsData from "../utils/GetAuthorsData";
import { useSelector } from "react-redux";
import { optionSelector } from "../redux/optionsSlice/selector";
import { useQuery } from "@tanstack/react-query";

export default function UseAuthorsData() {
  const { authorQuery } = useSelector(optionSelector);
  return useQuery({
    queryKey: ["authors"],
    queryFn: () => GetAuthorsData(authorQuery),
  });
}
