export type FilterType = 'assignee' | 'history' | 'createdBy';
export type FilterCondition = 'is' | 'isNot';

export interface FilterCriteria {
    id: string;
    type: FilterType;
    condition: FilterCondition;
    value: string;
}

export class FilterBuilder {
    private filters: FilterCriteria[] = [];

    private generateId() {
        return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`;
    }

    addFilter(type: FilterType, condition: FilterCondition, value: string): FilterBuilder {
        this.filters.push({ id: this.generateId(), type, condition, value });
        return this;
    }

    removeFilter(type: FilterType): FilterBuilder {
        this.filters = this.filters.filter(filter => filter.type !== type);
        return this;
    }

    clearFilters(): FilterBuilder {
        this.filters = [];
        return this;
    }

    getFilters(): FilterCriteria[] {
        return [...this.filters];
    }

    buildQueryString(): string {
        if (this.filters.length === 0) return '';

        const params = this.filters.map(filter => {
            const conditionParam = filter.condition === 'is' ? '' : 'not_';
            return `${filter.type}=${conditionParam}${encodeURIComponent(filter.value)}`;
        });

        return `?${params.join('&')}`;
    }
} 