import PointerPanZoomShell, {
  type PointerPanZoomShellProps,
} from "./PointerPanZoomShell";

export type ProductZoomCardProps = Omit<
  PointerPanZoomShellProps,
  "overlay" | "priority"
>;

export default function ProductZoomCard(props: ProductZoomCardProps) {
  return <PointerPanZoomShell {...props} />;
}
