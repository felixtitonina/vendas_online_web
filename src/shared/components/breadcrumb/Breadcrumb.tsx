import { Breadcrumb as BreadcrumbAntd } from "antd";
import { useNavigate } from "react-router-dom";

export interface ListBreadcrumb {
  name: string;
  navigateTo?: string;
}

interface BreadcrumbProps {
  listBreadcrumb: ListBreadcrumb[];
}

const Breadcrumb = ({ listBreadcrumb }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleGoToClick = (navidateTo: string) => {
    navigate(navidateTo);
  };
  return (
    <BreadcrumbAntd>
      {listBreadcrumb.map((breadcrumb, index) => (
        <BreadcrumbAntd.Item key={`breadcrumb_${index}`}>
          {breadcrumb.navigateTo ? (
            <a onClick={() => handleGoToClick(breadcrumb.navigateTo || "")}>
              {breadcrumb.name}
            </a>
          ) : (
            breadcrumb.name
          )}
        </BreadcrumbAntd.Item>
      ))}
    </BreadcrumbAntd>
  );
};

export default Breadcrumb;
