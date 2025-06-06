import { Course } from '@entities/course';

export class ExportCourseDto {
  constructor(course: Course) {
    this.id = course.id;
    this.name = course.name;
    this.fullName = course.fullName;
    this.startDate = course.startDate.toISOString();
    this.endDate = course.endDate.toISOString();
    this.alias = course.alias;
    this.discipline = course.discipline ? { id: course.discipline.id, name: course.discipline.name } : null;
    this.description = course.description;
    this.descriptionUrl = course.descriptionUrl;
    this.registrationEndDate = course.registrationEndDate?.toISOString() ?? null;
    this.personalMentoringStartDate = course.personalMentoringStartDate?.toISOString() ?? null;
    this.personalMentoringEndDate = course.personalMentoringEndDate?.toISOString() ?? null;
    this.wearecommunityUrl = course.wearecommunityUrl || null;
  }

  id: number;
  name: string;
  fullName: string;
  alias: string;
  description: string;
  descriptionUrl: string;
  discipline: { id: number; name: string } | null;
  registrationEndDate: string | null;
  startDate: string;
  endDate: string;
  personalMentoringStartDate: string | null;
  personalMentoringEndDate: string | null;
  wearecommunityUrl: string | null;
}
