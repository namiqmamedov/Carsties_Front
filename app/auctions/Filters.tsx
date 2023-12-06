import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react'

const pageSizeButtons = [4,8,12]

export default function Filters() {
    const pageSize = useParamsStore(state => state.pageSize);
    const setParams = useParamsStore(state => state.setParams);

    return (
    <div className='flex justify-between items-center mb-4'>
        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>
                <ButtonGroup>
                    {pageSizeButtons.map((item, i) => (
                        <Button key={i}
                            onClick={() => setParams({pageSize: item})}
                            color={`${pageSize === item ? 'red' : 'gray'}`}
                            className='focus:ring-0'
                        >
                            {item}
                        </Button>
                    ))}
                </ButtonGroup>
            </span>
        </div>
    </div>
  )
}
