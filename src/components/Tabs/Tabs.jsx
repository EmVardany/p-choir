import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import classes from '../Tabs/Tabs.module.css';

import Player from "../Player/Player";

const Tabs = ({ data }) => (
    <TabsComponent>
        <TabList className={classes.tabs}>
            {data.map(({ heading }, i) => (
                <Tab key={i} className={classes.tab} selectedClassName={classes.active}>{heading}</Tab>
            ))}
        </TabList>
        {data.map(({ audioSrc }, i) => (
            <TabPanel key={i}>
                <Player audioSrc={audioSrc}/>
            </TabPanel>
        ))}
    </TabsComponent>
);

export default Tabs;
