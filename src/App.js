import React from 'react';
//import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { Page } from './components/Page'
//import { chartSimple } from './components/Chart'
import { DragAndDropSidebar } from './DragDropSidebar'

function App() {
  return (
    <Page>
      <DragAndDropSidebar/>
      {/* <FlowChartWithState 
          initialValue={chartSimple}
          config={{
            snapToGrid: true,
          }}
      /> */}
    </Page>
  );
}

export default App;
