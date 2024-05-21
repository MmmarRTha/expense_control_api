import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    label?: string;
    amount: number;
    
}
export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl font-bold text-sky-600">
        {label && `${label}: `}
        <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
