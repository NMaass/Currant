import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';


const AppleTabs = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();

  React.useEffect(() => {
    if(props.onChange) {
      props.onChange(tabIndex)
    }
  }, [tabIndex])

  return (
    <Tabs
      centered
      classes={tabsStyles}
      onChange={(e, index) => setTabIndex(index)}
      style={{
        maxWidth: '505px',
      }}
      value={tabIndex}
    >
      <Tab
        classes={tabItemStyles}
        disableRipple
        label={'All'}
      />
      <Tab
        classes={tabItemStyles}
        disableRipple
        label={'Completed'}
      />

    </Tabs>
  );
};


export default AppleTabs;
