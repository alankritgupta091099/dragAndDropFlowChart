import React from 'react';
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { Page } from './components/Page'
import { chartSimple } from './components/Chart'

function App() {
  return (
    <Page>
      <FlowChartWithState 
          initialValue={chartSimple}
          config={{
            snapToGrid: true,
          }}
      />
    </Page>
  );
}

export default App;
