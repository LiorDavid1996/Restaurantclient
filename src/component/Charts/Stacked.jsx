import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode ,data } = useStateContext();



  const stackedCustomSeries = [

    { dataSource: data[0]?.cities,
      xName: 'name',
      yName: 'revenue',
      name: 'revenue',
      type: 'StackingColumn',
      background: 'blue',
  
    },
  
    { dataSource: data[0]?.cities,
      xName: 'name',
      yName: 'sum',
      name: 'order num',
      type: 'StackingColumn',
      background: 'red',
  
    },
  
  ];
  const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 2000,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };
 
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default Stacked;
