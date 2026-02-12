import React from 'react';
import { 
  Cpu, 
  Send, 
  MonitorX, 
  WifiOff, 
  HardDrive, 
  Terminal, 
  Bot, 
  User,
  Sparkles,
  AlertCircle,
  RefreshCw,
  Zap,
  Trash2,
  MessageCircle,
  Phone,
  Share2,
  Check,
  Copy,
  Mail
} from 'lucide-react';

export const IconCpu = (props: any) => <Cpu {...props} />;
export const IconSend = (props: any) => <Send {...props} />;
export const IconMonitorX = (props: any) => <MonitorX {...props} />;
export const IconWifiOff = (props: any) => <WifiOff {...props} />;
export const IconHardDrive = (props: any) => <HardDrive {...props} />;
export const IconTerminal = (props: any) => <Terminal {...props} />;
export const IconBot = (props: any) => <Bot {...props} />;
export const IconUser = (props: any) => <User {...props} />;
export const IconSparkles = (props: any) => <Sparkles {...props} />;
export const IconAlert = (props: any) => <AlertCircle {...props} />;
export const IconRefresh = (props: any) => <RefreshCw {...props} />;
export const IconZap = (props: any) => <Zap {...props} />;
export const IconTrash = (props: any) => <Trash2 {...props} />;
export const IconMessage = (props: any) => <MessageCircle {...props} />;
export const IconPhone = (props: any) => <Phone {...props} />;
export const IconShare = (props: any) => <Share2 {...props} />;
export const IconCheck = (props: any) => <Check {...props} />;
export const IconCopy = (props: any) => <Copy {...props} />;
export const IconMail = (props: any) => <Mail {...props} />;

export const ByteBackgroundLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(200, 200)">
      {/* Icon Group - Centered visually above text */}
      <g transform="translate(-85, -160)">
         {/* Monitor Frame */}
         <path d="M 10 10 H 160 A 25 25 0 0 1 185 35 V 125 A 25 25 0 0 1 160 150 H 10 A 25 25 0 0 1 -15 125 V 35 A 25 25 0 0 1 10 10 Z" 
               fill="none" stroke="currentColor" strokeWidth="10" />
         
         {/* Stand */}
         <path d="M 85 150 V 170 H 45 V 180 H 125 V 170 H 85" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>

         {/* Checkmark - Breaking out of the frame */}
         <path d="M 40 80 L 75 115 L 180 10" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />

         {/* Dot details */}
         <circle cx="15" cy="35" r="4" fill="currentColor" />
         <circle cx="145" cy="130" r="3" fill="currentColor" />
         <circle cx="160" cy="130" r="3" fill="currentColor" />
      </g>
      
      {/* Text Group */}
      <g transform="translate(0, 80)" textAnchor="middle" fill="currentColor">
        <text y="0" fontFamily="sans-serif" fontSize="85" fontWeight="900" letterSpacing="4">BYTE</text>
        <text y="45" fontFamily="sans-serif" fontSize="32" fontWeight="700" letterSpacing="1">COMPUTADORAS</text>
        <text y="75" fontFamily="sans-serif" fontSize="13" fontWeight="500" letterSpacing="1">MANTEN TU PC EN PERFECTO ESTADO</text>
      </g>
    </g>
  </svg>
);