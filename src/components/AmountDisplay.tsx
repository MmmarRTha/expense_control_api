import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    label?: string;
    amount: number;
    
}
export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-xl font-bold md:text-2xl text-sky-600">
        {label && `${label}: `}
        <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
