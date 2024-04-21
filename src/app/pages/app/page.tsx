'use client'

import AppView from './AppView';
import { Toaster } from "@/components/ui/toaster"

export default function page() 
{
    return (
        <div onContextMenu={(e) => e.preventDefault()} className='dark:bg-black min-h-screen max-h-auto no-scrollbar overflow-y-auto'>
            {/* <Webview /> */}
            <AppView/>
            <Toaster />
        </div>
    )
}
