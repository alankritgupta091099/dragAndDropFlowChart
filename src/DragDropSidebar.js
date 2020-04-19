import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '@mrblenny/react-flow-chart'
import { Content } from './components/Content'
import { Page } from './components/Page'
import { Sidebar } from './components/Sidebar'
import { SidebarItem } from './components/SideBarItem'
import { chartSimple } from './components/Chart'

const Message = styled.div`
margin: 10px;
padding: 10px;
background: rgba(0,0,0,0.05);
`

export const DragAndDropSidebar = () => (
  <Page>
    <Content>
      <FlowChartWithState 
        initialValue={chartSimple} 
        config={{
            snapToGrid: true,
          }}
        />
    </Content>
    <Sidebar>
      <Message>
        Actions
      </Message>
      <SidebarItem
        type="Email"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input'
          },
          port2: {
            id: 'port2',
            type: 'output'
          },
        }}        
      />
      <SidebarItem
        type="Update Profile Property"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: {
              custom: 'property',
            },
          },
        }}        
      />
      <Message>
        Timming
      </Message>
      <SidebarItem
        type="Time Delay"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input'
          },
          port2: {
            id: 'port2',
            type: 'output'
          },
        }}        
      />
      <Message>
        Logic
      </Message>
      <SidebarItem
        type="Conditional split"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input'
          },
          port2: {
            id: 'port2',
            type: 'output'
          },
        }}        
      />
      <SidebarItem
        type="Trigger Split"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input'
          },
          port2: {
            id: 'port2',
            type: 'output'
          },
        }}        
      />
    </Sidebar>
  </Page>
)
