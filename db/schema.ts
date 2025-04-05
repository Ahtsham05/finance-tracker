import { boolean } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts",{
    id: integer("id").primaryKey(),
    userId: integer("user_id").notNull(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull(),
    status: varchar("status").default("active"),
})