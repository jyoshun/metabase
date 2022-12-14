import SortAction from "./SortAction";
import ObjectDetailDrill from "./ObjectDetailDrill";
import QuickFilterDrill from "./QuickFilterDrill";
import ForeignKeyDrill from "./ForeignKeyDrill";
import ColumnFilterDrill from "./ColumnFilterDrill";
import UnderlyingRecordsDrill from "./UnderlyingRecordsDrill";
import AutomaticDashboardDrill from "./AutomaticDashboardDrill";
import CompareToRestDrill from "./CompareToRestDrill";
import ZoomDrill from "./ZoomDrill";
import FormatAction from "./FormatAction";
import DashboardClickDrill from "./DashboardClickDrill";

export const getDefaultDrills = () => [
  ZoomDrill,
  SortAction,
  ObjectDetailDrill,
  QuickFilterDrill,
  ForeignKeyDrill,
  ColumnFilterDrill,
  UnderlyingRecordsDrill,
  AutomaticDashboardDrill,
  CompareToRestDrill,
  FormatAction,
  DashboardClickDrill,
];
