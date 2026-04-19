export interface Service {
	id: number;
	title: string;
	description: string;
	icon: string;
}

export interface NavItem {
	label: string;
	href: string;
}

export interface ActionButtonProps {
  text: string;
  phoneNumber: string;
  customMessage?: string;
}

export interface PracticeAreaCardProps {
  title: string;
  path: string;
  isMain?: boolean;
}

export interface DifferentiatorProps {
  title: string;
}