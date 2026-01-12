// MongoDB initialization script
// This runs automatically when MongoDB container starts for the first time

// Switch to the target database
db = db.getSiblingDB('soc_chatbot');

// Create collections with validation
db.createCollection('users');
db.createCollection('ueba_results');
db.createCollection('raw_alerts');
db.createCollection('fp_patterns');
db.createCollection('config');

// Create indexes for performance
db.ueba_results.createIndex({ "alert_id": 1 }, { unique: true });
db.ueba_results.createIndex({ "timestamp": -1 });
db.ueba_results.createIndex({ "user": 1 });
db.ueba_results.createIndex({ "host": 1 });
db.ueba_results.createIndex({ "src_ip": 1 });
db.ueba_results.createIndex({ "severity": 1 });
db.ueba_results.createIndex({ "risk_score": -1 });

db.raw_alerts.createIndex({ "timestamp": -1 });
db.raw_alerts.createIndex({ "event_id": 1 });

db.fp_patterns.createIndex({ "pattern_hash": 1 }, { unique: true });

// NOTE: Admin user will be created automatically by the Flask app on first startup
// Default credentials: admin / admin123

print("✓ MongoDB initialized successfully!");
print("  - Collections created: users, ueba_results, raw_alerts, fp_patterns, config");
print("  - Indexes created for performance");
print("  - Admin user will be created on first Flask app startup");
print("");
print("⚠️  Default login: admin / admin123 - Change after first login!");
