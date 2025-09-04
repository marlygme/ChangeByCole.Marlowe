import { type User, type InsertUser, type Contact, type InsertContact, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.portfolioItems = new Map();
    
    // Initialize with some portfolio items
    this.initializePortfolio();
  }

  private initializePortfolio() {
    const portfolioData: InsertPortfolioItem[] = [
      {
        title: "Neon Nights Tour",
        description: "Music video production for emerging artist",
        category: "music-video",
        imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "true"
      },
      {
        title: "Urban Stories",
        description: "Documentary series capturing Melbourne's culture",
        category: "video",
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "true"
      },
      {
        title: "Festival Circuit",
        description: "Live event coverage and documentation",
        category: "live",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "true"
      },
      {
        title: "Synthwave Dreams",
        description: "Retro-futuristic music video concept",
        category: "music-video",
        imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "false"
      },
      {
        title: "Brand Stories",
        description: "Commercial content for Australian brands",
        category: "video",
        imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "false"
      },
      {
        title: "Acoustic Sessions",
        description: "Intimate performance documentation",
        category: "live",
        imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: "false"
      }
    ];

    portfolioData.forEach(item => {
      const id = randomUUID();
      const portfolioItem: PortfolioItem = {
        ...item,
        id,
        projectUrl: null
      };
      this.portfolioItems.set(id, portfolioItem);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).filter(
      item => item.category === category
    );
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = {
      ...insertItem,
      id,
      projectUrl: insertItem.projectUrl || null
    };
    this.portfolioItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
