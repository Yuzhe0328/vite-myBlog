export interface ChildItem {
    label: string;
    path: string;
}

export interface DocsItem {
    name: string;
    title?: string;
    children?: ChildItem[];
}

export interface ProjectItem {
  name: string;
  icon?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  techStack?: string[];
  features?: string[];
  link?: string;
  updateTime?: string;
  status?: 'active' | 'beta' | 'deprecated';
}

export interface PageOption {
  value: string
  path: string
}