import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleEllipsis,
  CircleSlash,
  CircleX,
  Clipboard,
  ClipboardCheck,
  Command,
  CreditCard,
  EllipsisVertical,
  File,
  FileText,
  HelpCircle,
  Image,
  Inbox,
  Laptop,
  Loader,
  Loader2,
  LucideIcon,
  LucideProps,
  Mail,
  MailWarning,
  Megaphone,
  Menu,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Puzzle,
  Settings,
  SquarePen,
  SunMedium,
  Trash,
  TriangleAlert,
  Twitter,
  User,
  UsersRound,
  X,
} from "lucide-react";

import { BrandIcons } from "./brand-icons";

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  menuVertical: EllipsisVertical,
  trash: Trash,
  post: FileText,
  mail: Mail,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  loader: Loader,
  clipboard: Clipboard,
  clipboardChecked: ClipboardCheck,
  edit: SquarePen,
  inbox: Inbox,
  team: UsersRound,
  integrition: Puzzle,
  empty: CircleSlash,
  ArrowLeft: ArrowLeft,
  alertTriangle: TriangleAlert,
  errorX: CircleX,
  successCheck: BadgeCheck,
  alertMegaPhone: Megaphone,
  menuCircle: CircleEllipsis,
  spam: MailWarning,
  check: Check,
  brand: {
    ...BrandIcons,
  },
};
