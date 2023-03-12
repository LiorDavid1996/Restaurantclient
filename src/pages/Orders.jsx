import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import  Header  from '../component/Header';
import product1 from '../data/product1.jpg'
import product2 from '../data/product1.jpg'
import product3 from '../data/product1.jpg'
import product4 from '../data/product1.jpg'
import product5 from '../data/product1.jpg'
import product6 from '../data/product1.jpg'
import product7 from '../data/product1.jpg'





const Orders = () => {
  const gridOrderImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );
  const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );
  const ordersData = [
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
      product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
  ];
  const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];
  const ordersGrid = [
    {
      field: 'ProductImage:',
      headerText: 'Image',
      template: gridOrderImage,
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderItems',
      headerText: 'Item',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'CustomerName',
      headerText: 'Customer Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'TotalAmount',
      headerText: 'Total Amount',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      template: gridOrderStatus,
      field: 'OrderItems',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center',
    },
  ];
  
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;