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

export default function Number({
    number, 
    className
}: {number: number, className: any}) {
    switch(number) {
        case 0: return <TbNumber0 className={className} />;
        case 1: return <TbNumber1 className={className} />;
        case 2: return <TbNumber2 className={className} />;
        case 3: return <TbNumber3 className={className} />;
        case 4: return <TbNumber4 className={className} />;
        case 5: return <TbNumber5 className={className} />;
        case 6: return <TbNumber6 className={className} />;
        case 7: return <TbNumber7 className={className} />;
        case 8: return <TbNumber8 className={className} />;
        case 9: return <TbNumber9 className={className} />;
    }
}
