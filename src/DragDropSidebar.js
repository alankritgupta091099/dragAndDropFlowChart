import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '@mrblenny/react-flow-chart'
import { Content } from './components/Content'
import { Page } from './components/Page'
import { Sidebar } from './components/Sidebar'
import { SidebarItem } from './components/SideBarItem'
import { chartSimple } from './components/Chart'

const Message = styled.div`
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #606A72;
    margin: 32px 0 8px 0;
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
        bg="white"
        type="Email"
        ports={ {
          port1: {
            id: 'port1',
            type: 'input'
          },
          port2: {
            id: 'port2',
            type: 'output'
          }
        }}        
      />
      <SidebarItem
        bg="white"
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
        bg="#ECF3F5"
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
        bg="#D9E0E7"
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
        bg="#D9E0E7"
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
