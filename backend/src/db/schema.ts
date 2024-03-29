import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ArticleSchema = sqliteTable("articles", {
	id: integer("id", { mode: "number" })
		.primaryKey({ autoIncrement: true })
		.notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	imageUrl: text("image_url").notNull(),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});
