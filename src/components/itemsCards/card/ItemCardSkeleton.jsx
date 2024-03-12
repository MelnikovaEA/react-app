import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const ItemCardSkeleton = () => {
    return (
        <div style={{width: '370px', margin:'15px 10px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.09)',
            borderRadius: '30px', boxSizing: 'border-box'}}>
            <div style={{width: '360', display: 'flex', flexDirection: 'column', alignItems: 'center',
            margin: '0 auto', padding: '10px 65px'}} >
                <Skeleton height={210} width={210} style={{marginTop: '20px'}}/>
                <Skeleton height={20} width={150} style={{margin: '40px 0 20px 0'}}/>
            </div>

            <div>
                <Skeleton height={150} width={340} style={{display: 'block', margin: '0 auto'}}/>
            </div>
            <div style={{display: 'flex', justifyContent: "space-around", paddingBottom: '10px'}}>
                <Skeleton height={20} width={80} />
                <Skeleton height={50} width={200} />
            </div>
        </div>
    );
}

export default ItemCardSkeleton;