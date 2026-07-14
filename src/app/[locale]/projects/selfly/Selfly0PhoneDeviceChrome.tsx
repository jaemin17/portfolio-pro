import styles from "./selfly0.module.css";

type Selfly0PhoneDeviceChromeProps = {
  time: string;
};

function StatusCellularIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
      <rect x="0" y="6" width="3" height="5" rx="0.6" />
      <rect x="4.5" y="4" width="3" height="7" rx="0.6" />
      <rect x="9" y="2" width="3" height="9" rx="0.6" />
      <rect x="13.5" y="0" width="3" height="11" rx="0.6" />
    </svg>
  );
}

function StatusWifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden>
      <path d="M7.5 9.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
      <path d="M4.2 6.4a4.8 4.8 0 0 1 6.6 0l.9-.9a6 6 0 0 0-8.4 0l.9.9Z" />
      <path d="M1.4 3.6a8.4 8.4 0 0 1 12.2 0l.9-.9a9.6 9.6 0 0 0-14 0l.9.9Z" />
    </svg>
  );
}

function StatusBatteryIcon() {
  return (
    <svg width="25" height="11" viewBox="0 0 25 11" fill="currentColor" aria-hidden>
      <rect x="0.5" y="1.5" width="20" height="8" rx="2" stroke="currentColor" fill="none" strokeWidth="1" />
      <rect x="2" y="3" width="14" height="5" rx="1" />
      <path d="M22 4v3a1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

/** Decorative iOS status bar + Dynamic Island + home indicator for screenshot mockups. */
export function Selfly0PhoneDeviceChrome({ time }: Selfly0PhoneDeviceChromeProps) {
  return (
    <div className={styles.selfly0PhoneChrome} aria-hidden="true">
      <div className={styles.selfly0PhoneStatusBar}>
        <span className={styles.selfly0PhoneStatusTime}>{time}</span>
        <span className={styles.selfly0PhoneDynamicIsland} />
        <span className={styles.selfly0PhoneStatusIcons}>
          <StatusCellularIcon />
          <StatusWifiIcon />
          <StatusBatteryIcon />
        </span>
      </div>
      <span className={styles.selfly0PhoneHomeIndicator} />
    </div>
  );
}
