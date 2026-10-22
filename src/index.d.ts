import type * as React from 'react';

export type IconName = 'arrowRight' | 'arrowDown' | 'arrowUp' | 'check' | 'bell' | 'send' | 'clock' | 'wait' | 'luggage' | 'alert';
export interface IconProps { name: IconName; size?: number; className?: string }
/** 20px line icon, 1.5 stroke, inherits currentColor. */
export declare function Icon(props: IconProps): React.ReactElement;

export interface MarkProps { size?: number; tile?: boolean; color?: string; label?: string; className?: string }
/** The Pájaro bird; `tile` draws the full app icon. */
export declare function Mark(props: MarkProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  icon?: IconName;
  iconEnd?: IconName;
}
/** Primary (cielo) at most once per view. */
export declare function Button(props: ButtonProps): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'cielo' | 'sol' | 'success' | 'danger' | 'warning'; icon?: IconName; children?: React.ReactNode; className?: string }
/** One or two words of status; `sol` only for "Mejor opción". */
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface FlightReason { title: string; detail?: string }
export interface FlightCardProps {
  airline: string; flightNumber?: string;
  from: string; to: string; depart: string; arrive: string; dayShift?: string;
  duration: string; stops: number; stopsAt?: string[];
  price: string; priceNote?: string;
  label?: string; recommended?: boolean;
  reasons?: FlightReason[]; whyTitle?: string; basis?: string;
  baggage?: string; cta?: string; actions?: boolean; className?: string;
}
/** Flight result with the "Por qué te lo recomiendo" explanation. */
export declare function FlightCard(props: FlightCardProps): React.ReactElement;

export interface PriceAlertProps {
  from: string; to: string; trip?: string; dates: string;
  price: string; change: string; direction?: 'down' | 'up'; since?: string;
  history: number[]; typical?: number; typicalLabel?: string;
  verdict?: 'buy' | 'wait'; verdictTitle?: string; verdictText: string; confidence?: number;
  updated?: string; actions?: boolean; className?: string;
}
/** Price alert with trend and the buy-or-wait verdict. */
export declare function PriceAlert(props: PriceAlertProps): React.ReactElement;

export interface ChatOption { title: string; detail?: string; value?: string; recommended?: boolean }
export interface ChatMessage { role: 'user' | 'ai'; text?: string; options?: ChatOption[]; note?: string }
export interface AIChatProps { title?: string | false; subtitle?: string; messages: ChatMessage[]; thinking?: boolean; suggestions?: string[]; placeholder?: string; className?: string }
/** The Pájaro copilot conversation. */
export declare function AIChat(props: AIChatProps): React.ReactElement;

declare global { interface Window { Pajaro: { Icon: typeof Icon; Mark: typeof Mark; Button: typeof Button; Badge: typeof Badge; FlightCard: typeof FlightCard; PriceAlert: typeof PriceAlert; AIChat: typeof AIChat } } }
