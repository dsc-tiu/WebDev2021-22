import { TabsContainer, UnderlinedDiv } from "./Tabs.styles";
import { motion } from "framer-motion";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { switchTab, tabsList } from "../../features/todo";

const Tabs:React.FC = () => {
  const todo = useAppSelector((state) => state.todo.value);
  const dispatch = useAppDispatch();
  return (
    <TabsContainer>
      {tabsList.map((tab, index) => (
        <li key={index} onClick={() => dispatch(switchTab(tab))}>
          {tab}
          {tab === todo.selectedTab && (
            <UnderlinedDiv as={motion.div} layoutId="underline" />
          )}
        </li>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
