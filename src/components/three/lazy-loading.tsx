'use client';
import React, { useState, useEffect } from 'react';

interface ILazyComponentProps extends IComponentProps {
  isLoading?: boolean;
}
const LazyComponent = (props: ILazyComponentProps) => {
  const { dataTestId, isLoading } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      aria-label="Loading"
      className={`nl-loader ${loaded && !isLoading ? '' : 'nl-loader--show'}`}
      data-testid={`lazy-component-${dataTestId}`}
    >
      <svg className="nl-icon nl-icon-loader" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M24 1a2.347 2.347 0 1 1 0 4.694 18.306 18.306 0 1 0 13.359 5.792 2.347 2.347 0 1 1 3.426-3.21A23 23 0 1 1 24 1Z"
        ></path>
      </svg>
      <svg
        className="nl-icon nl-icon-logo"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.3462 108.87C50.3488 108.87 49.5369 108.123 49.5224 107.194C49.3746 96.3723 54.5995 85.8582 64.6433 76.7397C64.9768 76.4374 65 75.9434 64.6897 75.6195C64.2171 75.1255 63.7764 74.6828 63.3386 74.2644C51.4419 62.8029 33.8593 56.1948 13.8296 55.663C12.8032 55.6361 12 54.8694 12 53.9193C12 52.9691 12.7742 52.2267 13.7629 52.1755C16.0042 52.0594 18.289 52 20.5564 52C41.6445 52 63.1994 57.1747 79.7642 66.2041C96.3146 57.1801 117.861 52.0081 138.937 52.0081C141.199 52.0081 143.481 52.0675 145.719 52.1836C146.708 52.2348 147.482 53.0015 147.482 53.9274C147.482 54.8532 146.679 55.6442 145.653 55.6711C125.643 56.211 108.072 62.8218 96.1754 74.2833C95.7434 74.699 95.3056 75.139 94.8358 75.6276C94.5256 75.9515 94.5488 76.4455 94.8822 76.7478C104.923 85.8636 110.145 96.375 109.997 107.197C109.986 108.125 109.171 108.873 108.174 108.873H51.3462V108.87ZM106.303 104.908C105.738 95.9458 101.052 87.2025 92.6757 79.4823C92.2988 79.1341 91.6783 79.1881 91.3622 79.5876C85.3719 87.1323 81.9969 95.719 81.5851 104.508L81.5967 104.759C81.5996 104.824 81.6025 104.891 81.6054 104.956C81.617 105.245 81.8751 105.475 82.1853 105.475H105.721C106.054 105.475 106.321 105.215 106.3 104.905L106.303 104.908ZM77.3403 105.477C77.6505 105.477 77.9057 105.248 77.9202 104.959C77.9231 104.891 77.926 104.824 77.9289 104.757L77.9405 104.511C77.5287 95.7163 74.1566 87.1296 68.1662 79.5849C67.8502 79.1881 67.2297 79.1341 66.8528 79.4796C58.4761 87.2025 53.7876 95.9458 53.2222 104.908C53.2019 105.215 53.4716 105.477 53.8021 105.477H77.3374H77.3403ZM71.1005 77.5684C74.7191 82.1223 77.4359 87.0135 79.2104 92.1639C79.3844 92.6687 80.1412 92.6687 80.3151 92.1639C82.0925 87.0135 84.8094 82.125 88.4279 77.5711C88.8861 76.9962 88.773 76.1864 88.1786 75.7302C85.8213 73.9243 83.261 72.2021 80.5355 70.5906C80.0629 70.3125 79.4569 70.3125 78.9843 70.5906C76.2616 72.2021 73.7043 73.9216 71.3499 75.7275C70.7555 76.1837 70.6424 76.9908 71.1005 77.5684ZM84.0903 68.6902C86.5172 70.2019 88.8716 71.8539 91.1187 73.622C91.3593 73.8109 91.7189 73.7893 91.9305 73.568C92.5046 72.9633 93.0353 72.4288 93.5572 71.9268C99.0488 66.636 105.764 62.2657 113.346 59.0076C113.973 58.7376 113.654 57.8522 112.978 57.9899C102.563 60.0819 92.7714 63.394 84.1338 67.767C83.7511 67.9614 83.7308 68.4635 84.0932 68.6902H84.0903ZM46.5881 57.9953C45.9126 57.8603 45.5907 58.743 46.2199 59.013C53.7847 62.2657 60.4855 66.6252 65.9626 71.9052C66.4903 72.4126 67.0238 72.9498 67.6008 73.5599C67.8096 73.7812 68.1691 73.8028 68.4127 73.6139C70.6569 71.8485 73.0084 70.1992 75.4324 68.6875C75.7948 68.4608 75.7745 67.9587 75.3918 67.7643C66.7658 63.3967 56.9887 60.09 46.5881 57.9953Z"
          fill="#5C5E62"
        />
      </svg>
    </div>
  );
};

export default LazyComponent;
