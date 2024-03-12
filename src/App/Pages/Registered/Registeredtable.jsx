import React from 'react';
import Table from 'react-bootstrap/Table';
import './table.css';
const RegisteredTable = () => {
  const data = [
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
    {
      No: '01.',
      Image:
        'https://s3-alpha-sig.figma.com/img/c542/dd3c/2aee723b27e41f115b0ca1821bda1c5c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKewdBXJGmF1SVA24qZdcSPvXm9e9O-Rq959g0DDU6sagaaAwZBXetP1X1QRplZ9J6l~ra~KbiN2oLYZT2uziGXwPNDqOEp~c5fUEmoYaLVz8Zt2uoexQicN-oWPUKRsIFfvwB--XIIN43Io-2yTw-DqM0U~GyPbT12rgXboIQ7MoQlpSL0bGorpbAPjIF35ilynrH7vsw3SvyUAbfWZl8RkRw2qaGp1zs4QoPArY8J7ys455S5Mnqjmti45IGnLepUOO49-egcSXO4WdRWkglrQrMR02tM~OCZ5JKNFrm8rcKbPBlzNj8nKhi53Y0st-MOrdSyH2bmn1~TQEam9kA__',
      Name: 'Thomas Shelby',
      Email: 'johnsondoe@nomail.com',
    },
  ];

  return (
    <div className='px-5'>
      <Table responsive>
        <thead>
          <tr>
            <th className='tablehead'>No</th>
            <th className='tablehead text-nowrap '>Profile Image</th>
            <th className='tablehead'>Name</th>
            <th className='tablehead'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='tabledata'>{val.No}</td>
              <td className='tabledata'>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    overflow: 'hidden',
                    borderRadius: '50%',
                  }}
                >
                  <img
                    src={val.Image}
                    alt='Profile'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </td>
              <td className='tabledata'>{val.Name}</td>
              <td className='tabledata'>{val.Email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RegisteredTable;
