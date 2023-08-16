import { MailOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import React from 'react'

function Home() {
    const options = [
        {label: "one", value: 1},
        {label: "two", value: 2}
    ];

    return (
        <>
            <div className='text-center mt-3 text-orange-700'>Welcome to Home</div>
            <div>
                <UserAddOutlined/> : ant icon
            </div>
            <div>
                {/* ant design */}
                <Input type='text' className="w-[200px] mx-auto my-3" onChange={(values)=>console.log(values)} required={true}/>
            </div>
            <div>
                {/* ant with ant icon design */}
                <Input prefix={<MailOutlined/>} type='email' className="w-[200px] mx-auto my-3" required={true}/>
            </div>
            <div>
                {/* another ant design */}
                <Select options={options} className='w-[200px]' placeholder="Select something"/>
            </div>
        </>
    );
}

export default Home 