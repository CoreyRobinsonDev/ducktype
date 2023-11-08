import { useRef } from 'react';

import Textbox from '@/components/Textbox/Textbox'
import Toolbar from '@/components/Toolbar/Toolbar'

export default function RefProvider() {
    const textboxRef = useRef<HTMLTextAreaElement>(null);

    return <>
        <Toolbar textboxRef={textboxRef} />
        <Textbox textboxRef={textboxRef} />
    </>
}
