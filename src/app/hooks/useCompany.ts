export default function useCheckCompany() {
    const company = localStorage.getItem('Company') as string;
    if (company) {
      return true;
    }
  
    return false;
}
  