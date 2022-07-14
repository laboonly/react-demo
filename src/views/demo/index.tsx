import React, { FC, useState } from "react";
import './index.css'
import { findDAG } from './utils';
import { Stage, Layer, Text, Rect, Circle, Arrow, Group } from 'react-konva';

export interface INode {
  id: number;
  point: [number, number];
}

export interface IEdge {
  id?: string;
  points: number[];
  stroke: string;
  dash: number[];
  source?: number;
  target?: number;
}


const Demo : FC = () => {
  // 节点
  const [nodes] = useState<INode[]>(() => {
    const reactLength = 7;
    let rectGroup : INode[] = [];
    for(let i = 1; i < reactLength; i++) {
      rectGroup.push({
        id: i,
        point: [90 * i + 50 * i, 30 * i + 50 * i]
      });
    }
    return rectGroup;
  });
  const [edges, setdges] = useState<IEdge[]>([]);

  const [mouseStyle, setmouseStyle ] = useState<string>('default');
  const [linePoints, setLinePoint] = useState<IEdge | null>(null);
  const initDraw = (e: any) => {
    console.log('e', e);
    const x = e.target.parent.attrs.x + e.target.parent.children[2].attrs.x;
    const y = e.target.parent.attrs.y + e.target.parent.children[2].attrs.y;
    setLinePoint({
      stroke: '#A6A6A6',
      dash: [],
      points: [x, y],
      source: e.target.parent.attrs.nodeId
    });
    setOpenDraw(true);
  }

  const [openDraw, setOpenDraw] = useState<boolean>(false);

  const draw = (e: any) => {
    if(!openDraw || !linePoints) {
      return;
    }
    setLinePoint({
      ...linePoints,
      points: [linePoints.points[0], linePoints.points[1], linePoints.points[0], e.evt.offsetY, e.evt.offsetX - 5, e.evt.offsetY - 5],
    })
  }

  const closeDraw = (e: any) => {
    if(!openDraw || !linePoints) {
      return;
    }
    console.log('e', e);
    if(e.target.parent?.attrs.id === 'rect') {
      const x = e.target.parent.attrs.x + e.target.parent.children[0].attrs.x;
      const y = e.target.parent.attrs.y + e.target.parent.children[0].attrs.y;
      const target = e.target.parent.attrs.nodeId;
      const targetPoints = {
        ...linePoints,
        points: [linePoints.points[0], linePoints.points[1], linePoints.points[0], y, x, y],
        target: target,
        id: `e${linePoints.source}-${target}`
      }
      const newEdges = findDAG(nodes,[...edges, targetPoints]);
      setdges(newEdges);
    }
    setLinePoint(null);
    setOpenDraw(false);
  }

  

  const setMouseStyle = (style: string) => {
    setmouseStyle(style);
  }

  return (
    <Stage width={1000} height={1000}
      style={
        {cursor: mouseStyle}
      }
      onMouseMove={draw}
      onMouseup={closeDraw}
    >
      <Layer>
        <Text text="Some text on canvas" fontSize={15} />
        <Group>
          {
            nodes.length > 0 &&
            <>
              {
                nodes.map((item, index) => {
                  return(
                    <Group  
                      id={'rect'}
                      x={item.point[0]}
                      y={item.point[1]}
                      key={index}
                      nodeId={item.id}
                    >
                      <Circle 
                        x={-15}
                        y={15}
                        radius={5}
                        fill="#FFFFFF"
                        shadowColor='#BABDD5'
                        shadowBlur={3}
                      />
                      <Rect
                        x={0}
                        y={0}
                        width={100}
                        height={30}
                        fill="#FFFFFF"
                        shadowColor='#BABDD5'
                        shadowBlur={3}
                      />
                      <Circle 
                        x={115}
                        y={15}
                        radius={5}
                        fill="#FFFFFF"
                        shadowColor='#BABDD5'
                        shadowBlur={3}
                        onMouseDown={initDraw}
                        onMouseenter={() => setMouseStyle('pointer')}
                        onMouseleave={() => setMouseStyle('default')}
                      />
                    </Group>
                  );
                })
              }
            </>
          }
          
        </Group>
        { 
          linePoints &&
          <Group>
            <Arrow 
              points={linePoints.points}
              stroke="#A6A6A6"
              fill='#A6A6A6'
              strokeWidth={2}
              pointerLength={5}
              pointerWidth={5}
            />
          </Group>
        }
        {
          edges?.length > 0 && 
          <>
            {
              edges.map((item, index) => {
                return (
                  <Arrow 
                    points={item.points}
                    stroke={item.stroke}
                    fill='#A6A6A6'
                    strokeWidth={2}
                    lineCap='round'
                    pointerLength={5}
                    pointerWidth={5}
                    key={index}
                    dash={item.dash}
                    source={item.source}
                    target={item.target}
                  />
                )
              })
            }
          </>
        }
      </Layer>
    </Stage>
  );
};

export default Demo;