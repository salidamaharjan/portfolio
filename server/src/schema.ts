import { relations } from "drizzle-orm";
import {
  date,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator(
  (defaultTableName) => `portfolio_${defaultTableName}`
);

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("update_at")
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date())
    .notNull(),
});
export const userRelations = relations(user, ({ many }) => ({
  education: many(education),
  project: many(project),
  experience: many(experience),
}));

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: varchar("degree", { length: 256 }).notNull(),
  schoolName: varchar("school_name", { length: 256 }).notNull(),
  startDate: date("start_date"),
  yearCompletion: date("year_completion"),
  description: varchar("description"),
  userId: integer("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
});
export const educationRelations = relations(education, ({ one }) => ({
  user: one(user, {
    fields: [education.userId],
    references: [user.id],
  }),
}));

export const project = pgTable("project", {
  id: serial("id").primaryKey(),
  projectName: varchar("project_name", { length: 256 }).notNull(),
  description: varchar("description", { length: 1000 }),
  technologiesUsed: varchar("technologies_used", { length: 1000 }),
  userId: integer("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
});
export const projectRelations = relations(project, ({ one }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
}));

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  company: varchar("company", { length: 256 }).notNull(),
  jobDescription: varchar("job_description", { length: 1000 }).notNull(),
  startDate: date("start_date"),
  endDate: date("end_date"),
  userId: integer("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
});
export const experienceRelations = relations(experience, ({ one }) => ({
  user: one(user, {
    fields: [experience.userId],
    references: [user.id],
  }),
}));

export const aboutMe = pgTable("aboutMe", {
  id: serial("id").primaryKey(),
  description: varchar("description", { length: 5000 }).notNull(),
  userId: integer("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
});
