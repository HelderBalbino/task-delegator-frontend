export interface Task {
	id: number;
	title: string;
	description: string;
	status: 'pending' | 'in_progress' | 'completed';
	sector_id: number;
	company_id: number;
	assigned_to_id: number;
	admin_id: number;
	created_at: string;
	updated_at: string;
}
