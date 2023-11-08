import {
    TbNumber1,
    TbNumber2,
    TbNumber3,
    TbNumber4,
    TbNumber5,
    TbNumber6,
    TbNumber7,
    TbNumber8,
    TbNumber9,
    TbNumber0,
    } from "react-icons/tb"; 

export default function Number({number}: {number: number}) {
    const attributes = {
        size: "100%",
        style: {
            width: "fit-content",
        }
    }
    switch(number) {
        case 0: return <TbNumber0 {...attributes} />;
        case 1: return <TbNumber1 {...attributes} />;
        case 2: return <TbNumber2 {...attributes} />;
        case 3: return <TbNumber3 {...attributes} />;
        case 4: return <TbNumber4 {...attributes} />;
        case 5: return <TbNumber5 {...attributes} />;
        case 6: return <TbNumber6 {...attributes} />;
        case 7: return <TbNumber7 {...attributes} />;
        case 8: return <TbNumber8 {...attributes} />;
        case 9: return <TbNumber9 {...attributes} />;
    }
}
