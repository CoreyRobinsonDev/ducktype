import { useRef, useEffect } from 'react';

import Textbox from '@/components/Textbox/Textbox'
import Toolbar from '@/components/Toolbar/Toolbar'
import { useAppDispatch } from "@/util/store";
import { load_cache_to_client } from '@/util/slices/appSlice';
import { load_cache_to_client as load_config } from '@/util/slices/configSlice';

export default function RefProvider() {
    const textboxRef = useRef<HTMLTextAreaElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(load_cache_to_client());
        dispatch(load_config());
    }, [])

    return <>
        <Toolbar textboxRef={textboxRef} />
        <Textbox textboxRef={textboxRef} />
    </>
}
